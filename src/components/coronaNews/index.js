import React, { useEffect, useState } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import app from '../../services/firebase';
import 'firebase/database';
import './style.css';

let activity = Object;

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  // console.log(news);

  return (
    <div>
      <h2>data corona</h2>
      {isLoading ? (
        <CircleToBlockLoading />
      ) : (
        news.map((data, index) => {
          activity = data.activity;
          return (
            <>
              <div className="card" id="card" keys={index}>
                <h1 className="experience-title">{data.date}</h1>
                {activity.map((dataChild, indexChild) => {
                  return (
                    <>
                      <div keys={indexChild}>
                        <h3 className="experience-description">
                          {' '}
                          {dataChild.title}
                        </h3>
                        <a className="experience-url" href={dataChild.url}>
                          {dataChild.url}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default CoronaNews;
