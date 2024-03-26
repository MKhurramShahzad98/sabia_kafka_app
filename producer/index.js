import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
  topic: 'test'
});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

function queueRandomMessage() {
  const category = getRandomCategory();
  const name = getRandomName(category);
  const event = { category, name };
  const success = stream.write(eventType.toBuffer(event));     
  if (success) {
    console.log(`message queued (${JSON.stringify(event)})`);
  } else {
    console.log('Too many messages in the queue already..');
  }
}

function getRandomCategory() {
  const categories = ['VEHICALS', 'ELECTRONICS'];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomName(category) {
  if (category === 'VEHICALS') {
    const name = ['Car', 'Motercycle'];
    return name[Math.floor(Math.random() * name.length)];
  } else if (category === 'ELECTRONICS') {
    const name = ['Television', 'Radio'];
    return name[Math.floor(Math.random() * name.length)];
  } else {
    return 'empty..';
  }
}

setInterval(() => {
  queueRandomMessage();
}, 3000);