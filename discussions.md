## Branching Strategy
Lord forgive me for pushing all commits to the main branch. For now lets create something more cleaner and make us not to regret in the future.

This is gonna be workflow for this repository:
1. create specific branch per feature.
2. pull request to branch `development`.
3. once it is okay, merge to `main` and deploy.

## What db packages should be used for this repository
Related to `monggose`: 
i think we just giveaway the power of `nosql`, means we have been enforced to schema world by using `mongoose`.
```
example case:
> in firebase architecture, if we want to add data, that data will added to collections, literally.

> but if we use mongoose as far as i know, bts mongoose will select only field
included schema.

> what i expect if we have anything data like
{
  field1: value1,
  field2: value2
}

> this data should be ADDED to collection, BUT
in mongoose if we only define schema with field1
that field2 wont added to collection.
```
yeah my bad, should be aware of this behavior first.
let search alternatif hehehe :")

## Issues
As stranger user come to this repository, i do believe they will be confused a lot, let setup good documentation, workflow, how, what, and where okayyy.
