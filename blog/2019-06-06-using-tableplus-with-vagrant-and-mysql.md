---
title: "Using TablePlus with Vagrant and MySQL"
lastModified: "2019-06-06"
---

Moving from [Sequel Pro](https://www.sequelpro.com/) to [TablePlus](https://tableplus.io/) I ran into an issue connecting to MySQL on a Vagrant machine.

There is a difference in how Sequel Pro and TablePlus SSH connection settings work.

## Sequel Pro connection settings

![Sequel Pro connection settings](/images/sequel-pro-connection.png)

Sequel Pro connection settings using SSH

Using the SSH tunnel we are able to authenticate with the 'vagrant' user and `~/.vagrant.d/insecure_private_key`.

## TablePlus connection settings

![TablePlus connection settings screen](/images/tableplus-connection-839x1024.png)

TablePlus connection using SSH

TablePlus uses a more specific connection to Vagrant. Using port `2222` and instead of using the generic key, it requires the private key that is in the specific vagrant box directory:

`~/{dir to box}/.vagrant/machines/{box name}/virtualbox/private_key`

- Replace `{dir to box}` with the directory for the Vagrant machine
- Replace `{box name}` with the name of the box

To make this easier, add the configuration to the `~/.ssh/config` file by running the following command:

```
cd ~/{dir to box}
echo "" >> ~/.ssh/config
vagrant ssh-config >> ~/.ssh/config
```

It will look something like this:

```
Host box-name
  HostName 127.0.0.1
  User vagrant
  Port 2222
  UserKnownHostsFile /dev/null
  StrictHostKeyChecking no
  PasswordAuthentication no
  IdentityFile /{dir to box}/.vagrant/machines/box-name/virtualbox/private_key
  IdentitiesOnly yes
  LogLevel FATAL
  ForwardAgent yes
```

This allows the config of TablePlus to use the "Use SSH key" and will look in the `~/.ssh/config` file for it.
