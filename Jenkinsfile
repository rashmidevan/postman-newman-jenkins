pipeline {
 agent any
 stages {
 stage('Build from local') {
    steps {
      echo 'Hello World'
      }
     }
   }
 post { 
        always { 
            echo 'I will always say Hello again!'
        }
    }
  }
