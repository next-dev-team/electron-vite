import { useEffect } from 'react';
import { Button, Layout } from 'antd';

const Index = () => {
  useEffect(() => {
    fetch('http://localhost:42000/pinokio/info').then((res) => {
      return res.json();
    });
  }, []);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Button
        onClick={() => {
          // pinokio/browser
          fetch('http://localhost:42000/api/next-api.git/nodejs/start.js', {})
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
        type="primary"
        style={{ margin: '20px' }}
      >
        Open Server
      </Button>
    </Layout>
  );
};

export default Index;
