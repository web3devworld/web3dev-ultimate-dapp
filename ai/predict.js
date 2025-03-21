import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

model.fit(xs, ys).then(() => {
    model.predict(tf.tensor2d([5], [1, 1])).print();
});