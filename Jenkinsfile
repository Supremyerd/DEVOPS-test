pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 20') {
                    sh 'npm i'
                }
            }
        }
        stage('Docker build') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }
    }
}
