import React, { useEffect, useState } from 'react';

const MessageOfTheDay = () => {
  const baseUrl = process.env.API_URL + '/messages';
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(messages => {
        //random number betwen 1 and 3 inclusive
        const randomNumber = Math.floor(Math.random() * 3);
        const _message = messages[randomNumber].message;
        setMessage(_message);
      });
  }, [setMessage]);

  return (
    <>
      <div>The message of the day is:</div>
      <div>{message}</div>
    </>
  );
};

export default MessageOfTheDay;
