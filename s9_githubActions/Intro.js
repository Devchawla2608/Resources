// Davide
// GitHub Actions
// • Actions & Cl
// • CD & Release management
// • Self-hosted runners
// • Build management
// • Package management
// • Secrets management

// Actions Advantages 

// • Fully integrated with GitHub
// • Respond to any GitHub event
// Community-powered workflows
// Any platform, any language, any
// cloud


// ! Key functionalities
// Davide Benvegnu
// • Linux, macOS, Windows, and
// containers
// • Matrix builds
// • Streaming, searchable, linkable logs
// • Built-in secret store
// • Easy to write, easy to share






// There are alot of ci systems and one of them is action example ci pipeline . 
// Action is better than other ci systems becuase action are integrated with fully github 

// • Fully integrated with GitHub
// • Respond to any GitHub event
// • Community-powered workflows
// Any platform, any language, any
// cloud


// • Linux, macOS, Windows, and
// containers
// • Matrix builds
// • Streaming, searchable, linkable logs
// • Built-in secret store
// Easy to write, easy to share

// ! Github Action Workflow 

// Events[Triggers] -(Trigger)> Workflows -(Use)> Actions 

// Operation or structure which your github action does whcih we want to do 

// actions are individual 

// on:
    // schedule:
    // -cron: @ 12**1

// Her we can use something like workflow underscore dispatch event to trigger the action workflow manually.
// It allows basically to trigger the action workflow 

// So it is best practice to write the underscore dispatch so that we can check the workflow without doing some important event like pushing code or something like that 

// ? To make it work all the code should be present into ./github/workflows/build.yml


// Workflows
// Workflow files glue together
// existing actions in sequence
// • Listen for particular events
// • Then run pre-existing actions •
// • Or shell scripts


// ! Actions 
// Actions
// • Reusable units of code
// • Referencing vs authoring
// Actions
// • Administrative features
// • Storing shared Actions
// • Post your actions to the
// workflow and you
// GitHub Marketplace

// ! TroubleShooting Tools


// Action Debugging - 

// In other ci platforms we generally do this with enviorment variables but in cli actions we do using secretes

// We can do step debugging which will give us information about actions 

// ACTIONS_STEP_DEBUG : true 

// ACTIONS_RUNNER_DEBUG : true
// In this case of secrete we will not the log in the logs window / It will debug in running time
