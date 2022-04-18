pipeline {
    stages{
        stage("checkout"){
            steps {
            checkout scm
            agent {
                docker {
                    image 'playground_frontend' 
                    args '-p 3000:3000' 
                }
                docker {
                    image 'playground_backend'
                    args '-p 1024:1024'
                }
            }
        }
        }
        stage("run tests"){
            steps {
               sh 'jest ./frontend/test.spec.js'
            }
        }
    }
}