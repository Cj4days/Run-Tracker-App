package dev.cole.runnerz.run;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

import java.time.LocalDateTime;

public record Run(Integer id,
                  String image,
                  @NotEmpty
                  String title,
                  LocalDateTime startedOn,
                  LocalDateTime completedOn,
                  @Positive
                  Integer miles,
                  Location location)

{
    public Run {
        if (startedOn.isAfter(completedOn)) {
            throw new IllegalArgumentException("Run cannot be completed before it starts");
        }
    }

}