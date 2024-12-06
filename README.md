# Simple DB Application

## Описание

Это простое приложение, состоящее из двух компонентов: веб-приложения на Node.js и базы данных PostgreSQL. Компоненты взаимодействуют друг с другом через Docker Compose.

## Шаги по сборке и запуску
### 1. Получение Docker образа приложения

Код приложения хранится в Docker Registry, можно загрузить его, используя следующую команду:
```
docker pull artemgoncharov3012/simple-db-app:latest
```
### 2. Запуск приложения с помощью Docker Compose:

Запустите команду для сборки и запуска контейнеров:
```
docker-compose up -d
```

### 3. Использование Kubernetes
Для запуска кластера:
```
minikube start
```
Для создания отдельного пода:
```
kubectl apply -f ./kube/pod.yaml
```
Для создания deployment:
```
kubectl apply -f ./kube/deployment.yaml
```
Для создания сервиса:
```
kubectl expose deployment db-app-deployment --type=ClusterIP --port=3002
```