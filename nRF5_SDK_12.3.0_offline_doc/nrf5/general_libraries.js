var general_libraries =
[
    [ "ANT libraries", "lib_ant.html", "lib_ant" ],
    [ "BLE libraries", "lib_ble.html", "lib_ble" ],
    [ "BLE serialization", "lib_serialization.html", "lib_serialization" ],
    [ "BLE Services", "ble_services.html", "ble_services" ],
    [ "Block allocator library", "lib_balloc.html", [
      [ "Usage", "lib_balloc.html#lib_balloc_usage", null ]
    ] ],
    [ "Bootloader modules", "lib_bootloader_modules.html", "lib_bootloader_modules" ],
    [ "Board Support Package (BSP)", "lib_bsp.html", "lib_bsp" ],
    [ "Button handling library", "lib_button.html", null ],
    [ "Capacitive Sensor library", "lib_csense.html", [
      [ "Resource usage", "lib_csense.html#csense_lib_resource", null ],
      [ "Initialization and starting", "lib_csense.html#csense_lib_init", null ],
      [ "Reading values from sensors", "lib_csense.html#csense_lib_reading", null ],
      [ "Limitations", "lib_csense.html#csense_lib_limitations", null ],
      [ "Example", "lib_csense.html#csense_lib_example", null ]
    ] ],
    [ "Cryptography library", "lib_crypto.html", [
      [ "Signing concepts", "lib_crypto.html#lib_crypto_concepts", null ],
      [ "Working with keys", "lib_crypto.html#lib_crypto_key", null ],
      [ "Installing micro-ecc", "lib_crypto.html#lib_crypto_installing", null ],
      [ "Library usage", "lib_crypto.html#lib_crypto_using", null ]
    ] ],
    [ "Error module", "lib_error.html", null ],
    [ "FIFO library", "lib_fifo.html", [
      [ "Initializing FIFO", "lib_fifo.html#lib_app_fifo_init", null ],
      [ "FIFO instance", "lib_fifo.html#lib_app_fifo_struct", null ],
      [ "Adding an element", "lib_fifo.html#lib_app_fifo_put", null ],
      [ "Fetching an element", "lib_fifo.html#lib_app_fifo_get", null ],
      [ "Empty buffer", "lib_fifo.html#lib_app_fifo_empty", null ],
      [ "Full buffer", "lib_fifo.html#lib_app_fifo_full", null ],
      [ "Multi-byte operations", "lib_fifo.html#lib_app_fifo_multibyte", null ],
      [ "FIFO readable/writeable size operations", "lib_fifo.html#lib_app_fifo_size", null ]
    ] ],
    [ "Flash handling library", "lib_flash.html", null ],
    [ "Gazell Pairing library", "lib_gzp.html", null ],
    [ "GPIOTE handling library", "lib_gpiote.html", [
      [ "Initializing GPIOTE module", "lib_gpiote.html#lib_app_gpiote_init", null ],
      [ "Registering with GPIOTE", "lib_gpiote.html#lib_app_gpiote_register", null ],
      [ "Enable/Disable GPIOTE", "lib_gpiote.html#lib_app_gpiote_enable_disable", null ],
      [ "Reading GPIOTE State", "lib_gpiote.html#lib_gpiote_get_states", null ]
    ] ],
    [ "HardFault handling library", "lib_hardfault.html", [
      [ "Using the library", "lib_hardfault.html#lib_hardfault_usage", null ],
      [ "Stack pointer", "lib_hardfault.html#lib_hardfault_sp", [
        [ "Process stack", "lib_hardfault.html#lib_hardfault_sp_process", null ],
        [ "Main stack", "lib_hardfault.html#lib_hardfault_sp_main", null ]
      ] ]
    ] ],
    [ "LED softblink library", "lib_led_softblink.html", [
      [ "Starting LED softblink", "lib_led_softblink.html#lib_led_softblink_init", null ],
      [ "Example", "lib_led_softblink.html#usage_example", null ],
      [ "Usage with a SoftDevice", "lib_led_softblink.html#usage_with_sd", null ]
    ] ],
    [ "Logger module", "nrf_log.html", [
      [ "Logs processing", "nrf_log.html#nrf_log_processing", null ],
      [ "Configuration", "nrf_log.html#nrf_log_config", null ],
      [ "Usage", "nrf_log.html#nrf_log_usage", [
        [ "Controlling the logger", "nrf_log.html#nrf_log_usage_control", null ],
        [ "Logging", "nrf_log.html#nrf_log_usage_logging", null ]
      ] ],
      [ "Performance", "nrf_log.html#nrf_log_performance", null ],
      [ "Customizing the logger backend", "nrf_log.html#nrf_log_custom", null ]
    ] ],
    [ "Low-power PWM library", "lib_low_power_pwm.html", [
      [ "Generating a low-power PWM signal", "lib_low_power_pwm.html#lib_pwm_init", null ],
      [ "Limitations", "lib_low_power_pwm.html#limitations", null ],
      [ "Example", "lib_low_power_pwm.html#usage_example", null ],
      [ "Usage with a SoftDevice", "lib_low_power_pwm.html#usage_with_sd", null ]
    ] ],
    [ "Mailbox library", "lib_mailbox.html", [
      [ "Creating a mailbox", "lib_mailbox.html#mailbox_create", null ],
      [ "Using the queue", "lib_mailbox.html#mailbox_usage", null ]
    ] ],
    [ "Mapped flags", "lib_mapped_flags.html", null ],
    [ "Memory Manager", "lib_mem_manager.html", [
      [ "Memory allocation", "lib_mem_manager.html#MEM_MANAGER", null ],
      [ "Configuration parameters", "lib_mem_manager.html#MEM_MANAGER_CONF", [
        [ "MEM_MANAGER_ENABLE_LOGS", "lib_mem_manager.html#mem_manager_params_logs", null ],
        [ "MEM_MANAGER_ENABLE_DIAGNOSTICS", "lib_mem_manager.html#mem_manager_params_diagnostics", null ],
        [ "MEM_MANAGER_DIAGNOSTICS_LOGS_ONLY", "lib_mem_manager.html#mem_manager_params_diag_only", null ],
        [ "MEM_MANAGER_DISABLE_API_PARAM_CHECK", "lib_mem_manager.html#mem_manager_params_api_check", null ],
        [ "Block count", "lib_mem_manager.html#mem_manager_params_count", null ],
        [ "Block size", "lib_mem_manager.html#mem_manager_params_size", null ]
      ] ]
    ] ],
    [ "NFC library and modules", "library_nfc.html", "library_nfc" ],
    [ "Power Management library", "lib_pwr_mgmt.html", [
      [ "CPU usage tracer", "lib_pwr_mgmt.html#cpu_usage_tracer", null ],
      [ "Standby timeout", "lib_pwr_mgmt.html#standby_timeout", null ],
      [ "Shutdown retry mechanism", "lib_pwr_mgmt.html#shutdown_retry_mechanism", null ],
      [ "Schedule handling library support", "lib_pwr_mgmt.html#app_scheduler_support", null ],
      [ "FPU support", "lib_pwr_mgmt.html#fpu_support", null ]
    ] ],
    [ "PWM library", "lib_pwm.html", [
      [ "Resource usage", "lib_pwm.html#lib_pwm_resources", null ],
      [ "Generating a low-power PWM signal", "lib_pwm.html#lib_pwm_init", null ],
      [ "Limitations", "lib_pwm.html#limitations", null ],
      [ "Example", "lib_pwm.html#usage_example", null ],
      [ "Usage with a SoftDevice", "lib_pwm.html#usage_with_sd", null ]
    ] ],
    [ "Queue library", "lib_queue.html", [
      [ "Creating a queue", "lib_queue.html#lib_queue_create", null ],
      [ "Using the queue", "lib_queue.html#mailbox_usage", null ]
    ] ],
    [ "RTOS support", "lib_rtos.html", "lib_rtos" ],
    [ "Schedule handling library", "lib_scheduler.html", [
      [ "Requirements:", "lib_scheduler.html#app_scheduler_req", [
        [ "Logic in main context:", "lib_scheduler.html#main_context_logic", null ],
        [ "Logic in interrupt context:", "lib_scheduler.html#int_context_logic", null ]
      ] ],
      [ "Applications using the Scheduler", "lib_scheduler.html#seq_diagrams_sched", null ],
      [ "Applications not using the Scheduler", "lib_scheduler.html#seq_diagrams_no_sched", null ]
    ] ],
    [ "SD card library", "lib_sdcard.html", [
      [ "Configuration", "lib_sdcard.html#sdcard_config", null ],
      [ "Initialization and operation", "lib_sdcard.html#sdcard_init", null ],
      [ "Usage", "lib_sdcard.html#sdcard_usage", null ]
    ] ],
    [ "Sensor Data Simulator", "lib_sensorsim.html", null ],
    [ "SHA-256 hash computation", "lib_sha256.html", null ],
    [ "Simple timer", "lib_simple_timer.html", null ],
    [ "SoftDevice handler library", "lib_softdevice_handler.html", [
      [ "Expectations from the application/developer using this library", "lib_softdevice_handler.html#expectations", [
        [ "Preprocessor defines", "lib_softdevice_handler.html#compiler_defines", null ],
        [ "Subscription to events", "lib_softdevice_handler.html#function_defines", null ],
        [ "No direct calls to sd_softdevice_disable and sd_softdevice_enable", "lib_softdevice_handler.html#api_usage", null ]
      ] ]
    ] ],
    [ "Timer library", "lib_timer.html", [
      [ "Usage", "lib_timer.html#lib_timer_usage", null ],
      [ "Migration note", "lib_timer.html#lib_timer_migration", null ]
    ] ],
    [ "Transport services", "transport_libraries.html", "transport_libraries" ],
    [ "TWI transaction manager", "lib_app_twi.html", null ],
    [ "Experimental: CryptoCell library", "lib_cryptocell.html", [
      [ "Using the CryptoCell library", "lib_cryptocell.html#lib_cryptocell_usage", null ]
    ] ],
    [ "Experimental: Flash Data Storage", "lib_fds.html", "lib_fds" ],
    [ "Experimental: Flash Storage", "lib_fstorage.html", [
      [ "Registering usage", "lib_fstorage.html#lib_fstorage_register", [
        [ "Event handler", "lib_fstorage.html#lib_fstorage_register_evthandler", null ],
        [ "Priority for flash usage", "lib_fstorage.html#lib_fstorage_register_priority", null ]
      ] ],
      [ "Initializing", "lib_fstorage.html#lib_fstorage_init", null ],
      [ "Storing and erasing data", "lib_fstorage.html#lib_fstorage_store", null ]
    ] ],
    [ "Experimental: Section variables", "lib_section_vars.html", [
      [ "Creating a named section", "lib_section_vars.html#lib_section_vars_usage_create", null ],
      [ "Registering section variables", "lib_section_vars.html#lib_section_vars_usage_regdata", null ],
      [ "Using section variables", "lib_section_vars.html#lib_section_vars_usage_module_usage", null ]
    ] ],
    [ "Experimental: USB device library", "lib_usbd.html", "lib_usbd" ]
];