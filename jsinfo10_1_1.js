try {
  console.log('Start of try runs');

  lalala;

  console.log('End of try never reached');
} catch(err) {
  console.log(err.name);
  console.log(err.message);
}