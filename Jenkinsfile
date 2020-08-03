pipeline {
    agent {
        docker {
           image 'cypress/base:10'
        }
    }
    stages {
        stage('Install Dependencies') { 
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
                echo 'Install Dependency'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run ci:cy-run'
            }
        }
    }
}
