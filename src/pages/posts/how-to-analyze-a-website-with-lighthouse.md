---
template: post
title: How To Analyze A Website With Lighthouse
subtitle: "\U0001F522 Data Is Key When It Comes To Improvement"
date: 2020-04-23T12:42:00Z
excerpt: ''
image: ''
thumb_image: ''

---
> This post was published by [Isotropic](https://isotropic.co), the digital agency behind SpeedOpp. If you're looking for a new website, advertising approach [get connected.](isotropic.co/contact)

Lighthouse

We use CMD to run and generate our reports.

    $ lighthouse https://www.example.com --chrome-flags="--headless" --quiet --view --output-path ...\SpeedOpp\speedopp-report.html --emulated-form-factor desktop

The

    lighthouse <url> <options>
    
    Logging:
      --verbose  Displays verbose logging                                                                          [boolean]
      --quiet    Displays no progress, debug logs or errors                                                        [boolean]
    
    Configuration:
      --save-assets                  Save the trace contents & devtools logs to disk                               [boolean]
      --list-all-audits              Prints a list of all available audits and exits                               [boolean]
      --list-trace-categories        Prints a list of all required trace categories and exits                      [boolean]
      --print-config                 Print the normalized config for the given config and options, then exit.      [boolean]
      --additional-trace-categories  Additional categories to capture with the trace (comma-delimited).
      --config-path                  The path to the config JSON.
                                     An example config file: lighthouse-core/config/lr-desktop-config.js
      --preset                       Use a built-in configuration.
                                     WARNING: If the --config-path flag is provided, this preset will be ignored.
                                                                                  [choices: "full", "perf", "mixed-content"]
      --chrome-flags                 Custom flags to pass to Chrome (space-delimited). For a full list of flags, see
                                     https://bit.ly/chrome-flags
                                     Additionally, use the CHROME_PATH environment variable to use a specific Chrome binary.
                                     Requires Chromium version 66.0 or later. If omitted, any detected Chrome Canary or
                                     Chrome stable will be used.                                               [default: ""]
      --port                         The port to use for the debugging protocol. Use 0 for a random port        [default: 0]
      --hostname                     The hostname to use for the debugging protocol.                  [default: "localhost"]
      --emulated-form-factor         Controls the emulated device form factor (mobile vs. desktop) if not disabled
                                                                                      [choices: "mobile", "desktop", "none"]
      --max-wait-for-load            The timeout (in milliseconds) to wait before the page is considered done loading and
                                     the run should continue. WARNING: Very high values can lead to large traces and
                                     instability
      --enable-error-reporting       Enables error reporting, overriding any saved preference. --no-enable-error-reporting
                                     will do the opposite. More: https://git.io/vFFTO
      --gather-mode, -G              Collect artifacts from a connected browser and save to disk. (Artifacts folder path may
                                     optionally be provided). If audit-mode is not also enabled, the run will quit early.
      --audit-mode, -A               Process saved artifacts from disk. (Artifacts folder path may be provided, otherwise
                                     defaults to ./latest-run/)
      --only-audits                  Only run the specified audits
      --only-categories              Only run the specified categories. Available categories: accessibility, best-practices,
                                     performance, pwa, seo
      --skip-audits                  Run everything except these audits
      --budget-path                  The path to the budget.json file for LightWallet.
    
    Output:
      --output       Reporter for the results, supports multiple values
                                                                [array] [choices: "json", "html", "csv"] [default: ["html"]]
      --output-path  The file path to output the results. Use 'stdout' to write to stdout.
                     If using JSON output, default is stdout.
                     If using HTML or CSV output, default is a file in the working directory with a name based on the test
                     URL and date.
                     If using multiple outputs, --output-path is appended with the standard extension for each output type.
                     "reports/my-run" -> "reports/my-run.report.html", "reports/my-run.report.json", etc.
                     Example: --output-path=./lighthouse-results.html
      --view         Open HTML report in your browser                                                              [boolean]
    
    Options:
      --help                               Show help                                                               [boolean]
      --version                            Show version number                                                     [boolean]
      --cli-flags-path                     The path to a JSON file that contains the desired CLI flags to apply. Flags
                                           specified at the command line will still override the file-based ones.
      --locale                             The locale/language the report should be formatted in
      --blocked-url-patterns               Block any network requests to the specified URL patterns
      --disable-storage-reset              Disable clearing the browser cache and other storage APIs before a run  [boolean]
      --throttling-method                  Controls throttling method          [choices: "devtools", "provided", "simulate"]
      --throttling.rttMs                   Controls simulated network RTT (TCP layer)
      --throttling.throughputKbps          Controls simulated network download throughput
      --throttling.requestLatencyMs        Controls emulated network RTT (HTTP layer)
      --throttling.downloadThroughputKbps  Controls emulated network download throughput
      --throttling.uploadThroughputKbps    Controls emulated network upload throughput
      --throttling.cpuSlowdownMultiplier   Controls simulated + emulated CPU throttling
      --extra-headers                      Set extra HTTP Headers to pass with request
      --precomputed-lantern-data-path      Path to the file where lantern simulation data should be read from, overwriting
                                           the lantern observed estimates for RTT and server latency.
      --lantern-data-output-path           Path to the file where lantern simulation data should be written to, can be used
                                           in a future run with the `precomputed-lantern-data-path` flag.
      --plugins                            Run the specified plugins                                                 [array]
      --channel                                                                                    [string] [default: "cli"]
    
    Examples:
      lighthouse <url> --view                                       Opens the HTML report in a browser after the run
                                                                    completes
      lighthouse <url> --config-path=./myconfig.js                  Runs Lighthouse with your own configuration: custom
                                                                    audits, report generation, etc.
      lighthouse <url> --output=json --output-path=./report.json    Save trace, screenshots, and named JSON report.
      --save-assets
      lighthouse <url> --emulated-form-factor=none                  Disable device emulation and all throttling
      --throttling-method=provided
      lighthouse <url> --chrome-flags="--window-size=412,660"       Launch Chrome with a specific window size
      lighthouse <url> --quiet --chrome-flags="--headless"          Launch Headless Chrome, turn off logging
      lighthouse <url> --extra-headers                              Stringify'd JSON HTTP Header key/value pairs to send in
      "{\"Cookie\":\"monster=blue\", \"x-men\":\"wolverine\"}"      requests
      lighthouse <url> --extra-headers=./path/to/file.json          Path to JSON file of HTTP Header key/value pairs to send
                                                                    in requests
      lighthouse <url> --only-categories=performance,pwa            Only run the specified categories. Available categories:
                                                                    accessibility, best-practices, performance, pwa, seo

For more information on Lighthouse, see https://developers.google.com/web/tools/lighthouse/.