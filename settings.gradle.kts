plugins {
    id("com.gradle.enterprise") version "3.13.4"
    id("org.gradle.toolchains.foojay-resolver-convention") version "0.6.0"
}

gradleEnterprise {
    buildScan {
        termsOfServiceUrl = "https://gradle.com/terms-of-service"
        termsOfServiceAgree = "yes"
        publishOnFailure()
    }
}

rootProject.name = "alchemist-experiments-bootstrap"
