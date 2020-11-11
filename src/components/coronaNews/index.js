import React, { useEffect, useState } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import { Card, Button } from 'react-bootstrap';
import app from '../../services/firebase';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  console.log(news);

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
              <Card className="text-center" keys={index}>
                {/* <h1 className="experience-title">{data.date}</h1> */}
                <Card.Header>
                  Berita Corona
                  {data.date}
                </Card.Header>
                {activity.map((dataNews, indexNews) => {
                  return (
                    <>
                      <Card.Body keys={indexNews}>
                        <Card.Title>{dataNews.title}</Card.Title>
                        <Card.Text>{dataNews.desc}</Card.Text>
                        <a className="experience-url" href={dataNews.url}>
                          <Button variant="primary">Baca Berita</Button>
                        </a>
                      </Card.Body>
                    </>
                  );
                })}
                <Card.Footer className="text-muted">
                  Corona Indonesia
                </Card.Footer>
              </Card>
              <br />
            </>
          );
        })
      )}
    </div>
  );
};

export default CoronaNews;
