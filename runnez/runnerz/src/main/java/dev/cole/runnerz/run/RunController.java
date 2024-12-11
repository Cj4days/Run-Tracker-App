package dev.cole.runnerz.run;


import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping("/api/runs")
public class RunController {

    private final RunRepository runRepository;

    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    @GetMapping("")
    List<Run> findAll() {
        return runRepository.findAll();
    }
    @GetMapping("/{id}")
    Run findById(@PathVariable Integer id) {
        Optional<Run> run = runRepository.findById(id);
        if(run.isEmpty()) {
            throw new RunNotFoundException();
        }
        return run.get();
    }


    // post
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void crete(@Valid @RequestBody Run run) {
        runRepository.create(run);
    }

    // update
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Run run, @PathVariable Integer id) {
        runRepository.update(run, id);
    }
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        runRepository.delete(id);
    }
}
