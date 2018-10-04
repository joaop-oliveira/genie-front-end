pipeline {
  agent {
    docker {
      image 'cypress/base:8'
      args '-e HOME=${workspace}'
    }

  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'pwd'
        sh '''ls -lh
'''
        sh 'yarn'
      }
    }
    stage('Start Local Server') {
      steps {
        sh 'yarn start &'
      }
    }
    stage('Cypress run Some Tests') {
      steps {
        sh 'sleep 60s'
        sh 'yarn cypress:run'
      }
    }
  }
  environment {
    GIT_COMMITTER_NAME = 'João Paulo Oliveira'
    GIT_COMMITTER_EMAIL = 'jpaulo2212gt@gmail.com'
  }
  post {
    always {
      junit 'cypress/results/test-development-output.xml'
      echo 'Stopping local server'
      sh 'pkill -f webpack'

    }

  }
}