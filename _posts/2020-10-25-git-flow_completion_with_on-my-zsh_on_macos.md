---
title: "git-flow completion with oh-my-zsh on MacOS Catalina"
date: "2020-10-25"
---

Trying to keep my Mac and software as lightweight as possible. I typically use [Brew](https://brew.sh/) to install everything and manage updates over time.

To keep branching and merging consistent between mutliple developers our choice is to use [`git-flow`](https://nvie.com/posts/a-successful-git-branching-model/). Previously using [`bash-it`](https://github.com/Bash-it/bash-it) the `git-flow-completion` module worked out of the box, but using `zsh` for a few months now I struggled through something broken in the completion plugin.

## Searching all the Stackoverflow and Github issues

Like anything else I would spend a few minutes every week or so trying to get it to work and relentlessley went through [every post on Stackoverflow and Github issues describing fixes](https://www.google.com/search?q=git-flow+completion+with+oh-my-zsh) to no avail. The issue seems to stem from `zsh` not picking up the `oh-my-zsh` completion plugin but instead picking up `brew`'s plugin.

## Setup

For context, the versions of everything I'm starting with as a fresh installation:

```
MacOS 10.15.7
▶ brew --version       
Homebrew 2.5.6
▶ git --version
git version 2.29.1
▶ zsh --version
zsh 5.7.1 (x86_64-apple-darwin19.0)
```

## Installing the git-flow-completion

I ended up following the [`bobthecow/git-flow-completion`](https://github.com/bobthecow/git-flow-completion#installation-for-zsh) guide for `zsh` and used option `iii` to install the plugin:

```
git clone https://github.com/bobthecow/git-flow-completion ~/.oh-my-zsh/custom/plugins/git-flow-completion
```

Opened up my `~/.zshrc` file and added the plugin:

```
plugins=(git-flow-completion)
```

Saved and reloaded the terminal and tried to auto complete git-flow:

```
git flow in[Tab]
```

Expected: `init` to be completed  
Actual: Only a list of files that matched the `in*` pattern in the directory  

## Solution

Ended up [stumbling across this one comment on Stackoverflow](https://stackoverflow.com/a/63795166) with no upvotes.

First remove these two files:

```
rm /usr/local/share/zsh/site-functions/_git
rm /usr/local/etc/bash_completion.d/git-flow-completion.bash
```

Then reset the autocompletion cache:

```
# Delete the completion cache
rm "$ZSH_COMPDUMP"
# Restart the zsh session
exec zsh
```

And like magic the `git-flow` autocompletion started working!

```
git flow in[Tab] -> git flow init
```

If you stumbled across this and it worked (or didn't) [I'd love to hear about it](https://twitter.com/nickdenardis). This has been frustrating me for the last few months after switching to `zsh`.