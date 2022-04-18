pipeline {
    agent {
        docker {
            image 'playground_frontend' 
            args '-p 3000:3000' 
        }
    }
    stages{   
        stage("run tests"){
            steps {
               sh 'jest ./frontend/test.spec.js'
            }
        }
    }
}