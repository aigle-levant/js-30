# To answer your questions

## What is this repo about?

This repository is made to store my solutions to the JavaScript 30 challenge [wonderful challenge organised by [@wesbos](https://github.com/wesbos); do check out the pinned repo in his profile!].

## What do I expect to see in your page?

You can scroll through my solution for each problem as well as side-notes to help you [and me] out while coding.

## How did you get this page working?

This page is made using an amazing theme called [Hyde](https://hyde.getpoole.com/). In fact, this repo is a fork of [Hyde's repo](https://github.com/poole/hyde). Please do check it out and support the author, [@mdo](https://github.com/mdo), if you can!

As for your question, I did the following :

- Forked the repository.
- Opened up `_config.yml` and edited some details to make it feel personal to my purpose.
- Removed `baseurl` and added the following code :

```yml
plugins:   [jekyll-paginate]
paginate_path:   "page:num"
```

- Added my notes in `_posts` folder and gave commit.
