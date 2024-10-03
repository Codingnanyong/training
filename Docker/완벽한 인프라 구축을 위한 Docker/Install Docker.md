## Install Docker 
🔌 Docker Web site : https://www.docker.com/get-started/
+ macOS : type (Apple Chip or Intel Chip)
+ windows : type (x86,x64)
+ Linux (Ubuntu)
  + Preparation for installation
    + 'apt' Update
      ```
      sudo apt-get Update
    + Using repositories via HTTP
       ```
       sudo apt-get install -y \ apt-transport-https \ ca-certificates \ curl\ software-properties-common
    + Add GPG Key
      ```
      curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    + Check GPG Key
      ```
      sudo apt-key fingerprint OEBFCD88
    + Register Rpository
      ```
      sudo add-apt-repository \ "deb [arch=amd64] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) \ stable"
      sudo apt-get Update
    + Install Docker
      ```
      sudo apt-get install docker-ce
