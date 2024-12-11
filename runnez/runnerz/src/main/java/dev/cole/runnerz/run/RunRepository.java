package dev.cole.runnerz.run;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import jakarta.annotation.PostConstruct;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;
import dev.cole.runnerz.run.Run;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;


import static org.springframework.jdbc.core.JdbcOperationsExtensionsKt.query;

@Repository
public class RunRepository {

    private static final Logger log = LoggerFactory.getLogger(RunRepository.class);
    private final JdbcClient jdbcClient;

    public RunRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Run> findAll() {
        return jdbcClient.sql("select * from run")
                .query(Run.class)
                .list();
    }
    public Optional<Run> findById(Integer id) {
        return jdbcClient.sql("SELECT id, title, started_on, completed_on, miles, location FROM Run WHERE id = ?")
                .param(id)
                .query(Run.class)
                .optional();
    }
    public void create(Run run) {
        var updated = jdbcClient.sql("INSERT INTO Run (id, image, title, started_on, completed_on, miles, location) values(?,?,?,?,?,?,?)")
                .params(run.id(), run.image(), run.title(), run.startedOn(), run.completedOn(), run.miles(), run.location().toString())
                .update();


        Assert.state(updated == 1, "Run not created");
    }

    public void update(Run run, Integer id) {
        var updated = jdbcClient.sql("UPDATE Run SET title = ?, started_on = ?, completed_on = ?, miles = ?, location = ? WHERE id = ?")
                .params(run.title(), run.startedOn(), run.completedOn(), run.miles(), run.location().toString(), id)
                .update();

        Assert.state(updated == 1, "Run not created");
    }

    public void delete(Integer id) {
        var updated = jdbcClient.sql("DELETE FROM Run WHERE id = ?")
                .params((id))
                .update();

        Assert.state(updated == 1, "Run not created");
    }

    public int count() {
        return jdbcClient.sql("select * from run").query(Run.class).list().size();
    }

    public void saveAll(List<Run> runs) {
        runs.forEach(this::create);
    }

    public List<Run> findByLocation(Location location) {
        return jdbcClient.sql("select * from run where location = ?")
                .param(location.toString())
                .query(Run.class)
                .list();
    }
}