package dev.cole.runnerz;

import dev.cole.runnerz.run.Run;
import dev.cole.runnerz.run.Location;
import dev.cole.runnerz.run.RunRepository;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.slf4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class Application {

	private static final Logger log = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}

	@Bean
	CommandLineRunner runner(RunRepository runRepository) {
		return args -> {
			Run run = new Run(1, "https://images.unsplash.com/photo-1547483238-f400e65ccd56", "Mountain Run", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			Run run1 = new Run(2, "https://images.unsplash.com/photo-1520361438442-2dce9e9bfad8", "Cool Trail", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			Run run2 = new Run(3, "https://images.unsplash.com/photo-1508430769587-99af194269f4", "Woods Run", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			Run run3 = new Run(4, "https://images.unsplash.com/photo-1528543606781-2f6e6857f318", "Morning Run", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			Run run4 = new Run(5, "https://images.unsplash.com/photo-1518214598173-1666bc921d66", "Dunes Run", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			Run run5 = new Run(6, "https://images.unsplash.com/photo-1647125460493-88f0715089f1", "Beach Run ", LocalDateTime.now().minus(1, ChronoUnit.HOURS), LocalDateTime.now(), 3, Location.OUTDOOR);
			runRepository.create(run);
			runRepository.create(run1);
			runRepository.create(run2);
			runRepository.create(run3);
			runRepository.create(run4);
			runRepository.create(run5);
		};
	}

}
