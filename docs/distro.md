# 发行版

::: details 目录
[[toc]]
:::

## 常见的发行版系列

### Debian系

Debian系发行版包括 Debian、Ubuntu、Linux Mint、Kali Linux 等，它们都基于 Debian 内核，使用 apt 包管理器和 systemd 作为系统初始化与服务管理工具。

#### Ubuntu

::: tip 特点
- Ubuntu 是著名的"新手村"发行版，非常适合初学者入门

- 基于 Debian 内核，继承了其稳定可靠的特性

- 使用 apt 作为包管理器，软件生态丰富

- 采用 systemd 作为系统初始化和服务管理工具

- 支持多语言，兼容多种硬件平台

- 社区活跃，拥有大量的用户和教程资源
:::

::: warning 缺点
- Snap 包管理器较为臃肿，不受部分用户欢迎

- 安装 Chromium 和 Firefox 时默认使用 snap 版本

```bash
sudo apt install chromium firefox  # 实际通过 snap 安装
```

- 早期版本（11.04 至 17.10）曾使用 Unity 桌面，但由于争议过大已被弃用
:::

Ubuntu 发行于 2004 年，最初版本为 Ubuntu 4.10，随后版本号逐年递增，最新版本为 Ubuntu 25.10。

它提供了丰富的[衍生版](https://ubuntu.com/desktop/flavors)可以选择，包括 Kubuntu、Ubuntu MATE、Ubuntu Kylin 等。

它有两个官方套系：
- [Ubuntu Desktop](https://ubuntu.com/desktop)（适合新手）
- [Ubuntu Server](https://ubuntu.com/server)（适合服务器）

👦🏻 推荐人群：
- 新手
- 有一定基础的用户
- 既需要稳定，又需要追新的用户

🗓️ 发行规律如下：

| 版本类型 | 发行时间 | 
|----------|---------|
| LTS      | 每两年一次，均在偶数年的4月发布 |
| 非LTS    | 每年一次（排除偶数年的4月）|

- 支持周期详见[Ubuntu 支持周期(EN)](https://ubuntu.com/about/release-cycle)。

⬇️ 下载链接

- [USTC 镜像](https://mirrors.ustc.edu.cn/ubuntu-releases/)
- [阿里镜像](https://mirrors.aliyun.com/ubuntu-releases/)

📦 包管理

Ubuntu使用apt包管理器，可以使用`apt`命令进行安装和卸载。

（作者声明：若无异义，Debian系的包管理操作同上）

基本命令示例：
```bash
# 常用命令(加入 -y 参数可自动确认)
sudo apt update       # 更新包列表
sudo apt upgrade      # 升级已安装的包
sudo apt install 软件名  # 安装软件
sudo apt purge 软件名   # 卸载软件
sudo apt remove 软件名  # 卸载软件，保留配置文件
sudo apt autoremove   # 清理无用包
# 其他常用命令
sudo apt search 软件名  # 搜索软件
sudo apt show 软件名    # 显示软件信息
sudo apt list --installed  # 列出已安装的包
```
::: details 参考资料
- [apt 命令详解](https://www.runoob.com/linux/linux-comm-apt.html)
- [Ubuntu 包管理器指南](https://help.ubuntu.com/community/AptGet/Howto)
:::

📦 包安装

Ubuntu 的包安装，可以使用`dpkg`命令进行安装和卸载。

（作者声明：若无异义，Debian系的包安装操作同上）

基本命令示例：
```bash
sudo dpkg -i 软件名.deb  # 安装软件
sudo dpkg -r 软件名       # 卸载软件
sudo dpkg -P 软件名       # 卸载软件，保留配置文件
```


::: tip 建议
- 新手可以选择 LTS 版本，避免频繁升级
- 如果需要使用最新的特性，可以选择非 LTS 版本
- 不要使用太旧的系统，因为它的漏洞堪比蜂窝🐝
:::

#### Debian

::: tip 特点
- Debian 是一个历史悠久的发行版，以其稳定性著称
- 提供了丰富的软件包和详细的文档
- 使用 apt 作为包管理器，软件生态完善
- 采用 systemd 作为系统初始化和服务管理工具
- 支持多种桌面环境和服务器应用
:::

::: warning 缺点
- 更新频率较慢，可能缺乏最新软件
- 对新手来说配置相对复杂
:::

Debian 发行于 1993 年，最初版本为 Debian 0.01，后续版本号逐年递增，最终版本为 Debian 13。

它以稳定性闻名，软件版本较老。

它也是发行版的先祖，是 Ubuntu 和其他类debian发行版的源头。

它的步伐虽然缓和，但是它是稳健的，可以胜任任何一个场景。

👦🏻 推荐人群：
- 有一定基础的用户
- 需要稳定的用户

🗓️ 发行规律如下：

| 分支 | 稳定性 | 对它的观念 |
|------|--------|----------|
| Stable | 稳定 | “如果没坏，就不要修” |
| Testing | 相对稳定 | “给你最大的自由，但请自己负责”|
| Unstable(sid) | 不稳定 | “这里还很不成熟，建议新手别去” |

支持周期详见[Debian 支持周期(Endoflife,EN)](https://endoflife.date/debian)。

⬇️ 下载链接

- [USTC 镜像](https://mirrors.ustc.edu.cn/debian-cdimage/)
- [阿里镜像](https://mirrors.aliyun.com/debian-cdimage/)


::: tip 建议
- 新手可以选择 Stable 分支，避免频繁升级
- 如果需要使用最新的特性，可以选择 Testing 分支
- 不要使用太旧的系统，因为漏洞可以随时迎敌；也不要使用Unstable分支，因为它不稳定，不值得冒险
:::

#### Linux Mint

::: tip 特点
- Linux Mint 是基于 Ubuntu 的发行版，提供了类似Windows的桌面环境
- 用户友好，适合新手使用
- 支持Cinnamon桌面环境，当然也有Xfce,MATE 等
- 使用 apt 作为包管理器，软件生态完善
:::

::: warning 缺点
- 相对于原生 Ubuntu，可能会有一些定制化的限制
- 大版本更新频率与 Ubuntu LTS 相同，软件版本可能会落后
:::

Linux Mint 提供了多种版本，每个版本都有其独特的桌面环境和特色。

目前主流的版本基于Ubuntu 24.04 LTS。

👦🏻 推荐人群：
- 新手
- 排斥snap的用户
- 需要稳定且适应老电脑的用户

🗓️ 发行规律如下：

| 分支 | 稳定性 |
|------|--------|
| Release | 稳定 |
| [LMDE](https://www.linuxmint.com/download_lmde.php) | 既稳定又前沿 |

⬇️ 下载链接

- [USTC 镜像](https://mirrors.ustc.edu.cn/linuxmint-cd/)
- [阿里镜像](https://mirrors.aliyun.com/linuxmint-cd/)


::: tip 建议
- 新手可以选择 Release 分支，避免频繁升级
- 如果需要使用最新的特性，可以选择 LMDE 分支
- 不要使用太旧的系统，因为漏洞会迎面“肘击”
:::

#### Kali Linux

::: warning 注意
Kali的专业性极强，不建议你使用。
:::

::: tip 特点
- Kali Linux 是一款专为渗透测试和安全审计设计的发行版
- 提供了丰富的安全工具和资源
- 基于 Debian，稳定性高
:::

👦🏻 推荐人群：
- 安全研究人员
- 渗透测试人员
- 需要安全工具的用户

::: tip 建议
- 专业人士选择 Kali Linux 进行安全测试
- 不适合普通用户日常使用
:::

### RedHat系

RedHat系发行版包括 RedHat、CentOS、Fedora 等，它们都基于 Linux 内核，使用 yum/dnf 包管理器和 systemd 作为系统初始化与服务管理工具。

#### CentOS
::: danger 请小心 
CentOS 7/8 已停止支持，慎用！

详见[CentOS 支持周期(Endoflife,EN)](https://endoflife.date/centos)

::: 

::: tip 特点
- CentOS 是一个开源的 Linux 发行版，基于 RedHat 并实现与RedHat 的二进制兼容
- 提供了丰富的软件包和详细的文档
- 使用 yum 作为包管理器，软件生态较为丰富
- 采用 systemd 作为系统初始化和服务管理工具
- 支持多种桌面环境和服务器应用
:::

::: warning 缺点
- 更新频率较慢，可能缺乏最新软件
- 对新手来说配置相对复杂
- 在后RHEL时代，CentOS 的地位有所下降
:::

CentOS 发行于 2003 年，最初版本为 CentOS 3.0，后续版本号逐年递增，最终版本为 CentOS 8.5。

它是 RedHat 的衍生版，与 RedHat 保持二进制兼容。


👦🏻 推荐人群：
- 有一定基础的用户
- 需要稳定的用户

🗓️ 发行规律：

它的发行规律与RHEL类似，详见[RHEL 支持周期(Endoflife,EN)](https://endoflife.date/redhat)。

⬇️ 下载链接

- [USTC 镜像](https://mirrors.ustc.edu.cn/centos-vault/)
- [阿里镜像](https://mirrors.aliyun.com/centos-vault/)

📦 包管理

CentOS 使用 yum 包管理器，可以使用`yum`命令进行安装和卸载。

基本命令示例：
```bash
# 常用命令(加入 -y 参数可自动确认)
sudo yum update       # 更新包列表
sudo yum upgrade      # 升级已安装的包
sudo yum install 软件名  # 安装软件
sudo yum remove 软件名   # 卸载软件
sudo yum autoremove   # 清理无用包
# 其他常用命令
sudo yum search 软件名  # 搜索软件
sudo yum info 软件名    # 显示软件信息
sudo yum list installed  # 列出已安装的包
```
::: details 参考资料
- [yum 命令详解](https://www.runoob.com/linux/linux-comm-yum.html)
:::

📦 包安装

CentOS 的包安装，可以使用`rpm`命令进行安装和卸载。

基本命令示例：
```bash
# 常用命令
sudo rpm -ivh 包名.rpm  # 安装RPM包
sudo rpm -e 包名        # 卸载RPM包
sudo rpm -qa            # 列出所有已安装的RPM包
sudo rpm -q 包名         # 查询包信息
```

::: details 参考资料
- [rpm 命令详解](https://www.runoob.com/linux/linux-comm-rpm.html)
:::




