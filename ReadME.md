# How to run project locally
- npm install - installs npm dependencies.
- ./scripts/start-kafka.sh - starts kafka inside docker container.
- ./scripts/create-topic.sh - creates kafka topic.
- npm run start:producer - starts producer.
- npm run start:consumer - starts consumer.

OR

- docker compose up
- docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
    --create \
    --bootstrap-server localhost:9092 \
    --replication-factor 1 \
    --partitions 1 \
    --topic test
- npm run start:producer
- npm run start:consumer