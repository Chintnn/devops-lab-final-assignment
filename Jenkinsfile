pipeline {
    agent any
    stages {
        stage('Build & Test') {
            steps {
                sh 'node --version'
                sh 'cd app && node test.js'
            }
        }
        stage('Docker Packaging') {
            steps {
                sh 'docker build -t payment-engine:capstone .'
                sh 'docker images payment-engine'
            }
        }
        stage('Deploy Cluster') {
            steps {
                sh 'ls -l k8s'
                sh 'cat k8s/deployment.yaml k8s/service.yaml'
                echo 'Manifests verified. Cluster apply is run from the host in the K8s task.'
            }
        }
    }
}