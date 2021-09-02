---
title: "Install Flutter Without Android Studio"
description: "Installing Flutter with Android Studio especially when you are limited by hardware resources may not be an optimal thing to do"
metaKeywords: "Install Flutter, VSCode, Android Studio, Old Hardware"
date: 2021-09-02T12:00
thumb: "https://miro.medium.com/max/1400/1*C0Qm8bggdn3KUGnlkT50lw.jpeg"
tags:
  - popular
  - flutter
---

# Install Flutter Without Installing Android Studio (Windows)

Installing Flutter with Android Studio especially when you are limited by hardware resources may not be an optimal thing to do. Alternative to Android Studio, A great choice is [VSCode](https://code.visualstudio.com/). It is light, simple and fast. In this article, you'll learn how to setup Flutter without using Android Studio. So you can get started with [VSCode](https://code.visualstudio.com/) to Flutter.

## 1. Install Git

- Go to [this](https://git-scm.com/downloads) site and download git for your platform

- Begin the installation process and follow according to the installer

- You can also define custom path

- For eg: W:\Utilities\git

## 1. Install Flutter

- Download [Flutter](https://flutter.dev/docs/get-started/install/windows)

- Extract and place it in certain folder. For eg: W:\Utilities\flutter

- Go inside Flutter installed Location and navigate to bin folder

- Copy the path. For eg W:\Utilities\flutter\bin

- Search for environment variable in search box, click on "Edit the system environment variable" then on Environment Variable. Under "User variable" section click on path then on edit. Click new and paste the path you copied.

  <img src="https://i.postimg.cc/Hk3dmQHb/flutter-bin.png" alt="flutter-bin"/>

- Press ok > ok > ok

## 2. Install openjdk8

- Download [openjdk8](https://github.com/AdoptOpenJDK/openjdk8-binaries/releases/tag/jdk8u292-b10_openj9-0.26.0) for your device. For [Windows 64bit](https://github.com/AdoptOpenJDK/openjdk8-binaries/releases/download/jdk8u292-b10_openj9-0.26.0/OpenJDK8U-jdk_x64_windows_openj9_8u292b10_openj9-0.26.0.zip), [Windows 32bit](https://github.com/AdoptOpenJDK/openjdk8-binaries/releases/download/jdk8u292-b10_openj9-0.26.0/OpenJDK8U-jdk_x86-32_windows_openj9_8u292b10_openj9-0.26.0.zip) .

- Extract and Rename the folder to openjdk8. For eg: W:\Utilities\openjdk8

- Copy the path.

- Search for environment variable in search box, click on "Edit the system environment variable" then on Environment Variable. Under "System variable" section click on new.

- Set Variable name: JAVA_HOME and Variable value: W:\Utilities\openjdk8 and click ok

  <img src="https://i.postimg.cc/HkTdFSGp/java-home.png" alt="java-home"/>

- Again Under "System Variable", click on path then on edit. Click new and add %JAVA_HOME%\bin

  <img src="https://i.postimg.cc/256mSV8M/Java-bin.png" alt="Java-bin"/>

- Press ok>ok>ok

## 4. Install Android SDK

- Go to [android studio](https://developer.android.com/studio#downloads). Under "Command line tools only", download the zip folder.

- Extract the command line tools and place in certain folder . For eg: W:\Utilities\Android

- Go inside bin folder of Android (W:\Utilities\Android\bin) and open command prompt in there

- See [build-tools versions](https://developer.android.com/studio/releases/build-tools) releases and choose your preferred version. At the time of this writing latest release is 30.0.0.
- Type this command and type y

```bash
    sdkmanager.bat "build-tools;30.0.0" ./sdk_path = ../
```

- See [Platforms versions](https://developer.android.com/studio/releases/platforms) releases and choose your preferred version or API Level. At the time of this writing latest release is 30.
- Type this command

```bash
    sdkmanager.bat "platforms;android-30" ./sdk_path = ../
```

- Above command will download and install the SDK platform inside Android folder.

- Search for environment variable in search box, click on "Edit the system environment variable" then on Environment Variable. Under "System variable" section click on new.

- Set Variable name: ANDROID_HOME and Variable value: W:\Utilities\Android and click ok

  <img src="https://i.postimg.cc/v86YngLd/android-home.png" alt="android-home"/>

- Under "System variable", click on path. Click on new and add this %ANDROID_HOME%\platform-tools

  <img src="https://i.postimg.cc/sDY3nkN6/Android-platform-tools.png" alt="Android-platform-tools"/>

## 5. Final

- Open Command Prompt
- Run and keep on typing y

```bash
    flutter doctor --android-licenses
```

- Run and see if there's any issue

```bash
    flutter doctor
```

- Now Enjoy Flutter without android studio
- You can now use [VSCode](https://code.visualstudio.com/) with dart and flutter extensions
- I recommend using web browser as an emulator rather than using android emulator because it requires comparatively less resources.

## Happy Fluttering!

<img src="https://thumbs.gfycat.com/MajorFantasticArgentineruddyduck-max-1mb.gif" alt="Fluttering">
