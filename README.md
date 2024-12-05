# Simple DB Application

## Описание

Это простое приложение, состоящее из двух компонентов: веб-приложения на Node.js и базы данных PostgreSQL. Компоненты взаимодействуют друг с другом через Docker Compose.

## Шаги по сборке и запуску
### Запуск приложения с помощью Docker Compose

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