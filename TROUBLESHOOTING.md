# Troubleshooting

## Builds

### Archive Failed Status 65

> [RUN_FASTLANE] ** ARCHIVE FAILED **  
> [RUN_FASTLANE] Exit status: 65  
> [RUN_FASTLANE] [!] Error building the application - see the log above

This error is usually caused by a missing or invalid provisioning profile. Make sure you have a valid provisioning profile for the app you are trying to build.

Run `EAS_LOCAL_BUILD_SKIP_CLEANUP=1 npx eas-cli build -e next -p ios --local` and check the `buildlog_path` printed in the output. Open the log file and you'll have more description on the specific error.

Logs are also uploaded in GitHub Actions.

### Provisioning profile doesn't include signing certificate

> error: Provisioning profile "\*[expo] com.shabados.next.app AppStore 2024-04-17T14:31:29.402Z" doesn't include signing certificate "Apple Distribution: {NAME}". (in target 'ShabadOS' from project 'ShabadOS')

The certificate used must be of type `Apple Distribution`. For some reason, `eas` generates a certificate of type `iOS Distribution`, which would be fine, except that when you try to build the app, it fails with the above error.

To fix this, you need to manually create a new certificate of type `Apple Distribution` and use that to sign the app.

### Invalid Provisioning Profile / Distribution Certificate

This can present with a few different error messages. We allow eas to manage our certificate + provisioning profile, but it will need regeneration once expired.

Run `bunx eas-cli credentials` to manage credentials. It's not particularly easy to integrate this into CI at the moment.
