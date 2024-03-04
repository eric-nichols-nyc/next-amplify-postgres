import { get } from 'aws-amplify/api';
async function getTodo() {
  try {
    const response = await fetch('https://9bcid8quob.execute-api.us-east-1.amazonaws.com/dev/todo')
    const result = await response.json();
    console.log('GET call succeeded: ', result);
    return result.success;

  } catch (e:any) {
    console.log('GET call failed: ', e);
  }
}export default async function Home() {
  const test = await getTodo();
  console.log(test);
  return (
  <div>{test}</div>
  );
}
