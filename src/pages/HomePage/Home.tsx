import React from 'react';
import { Button } from '../../components/Button';
import { saveAs } from 'file-saver';

// import { useNavigate } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const Home: React.FC<{}> = () => {
  // const navigate = useNavigate();
  // const gotToLogin = () => navigate('/login');

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun('Hello World'),
              new TextRun({
                text: 'Foo Bar',
                bold: true,
              }),
              new TextRun({
                text: '\tGithub is the best',
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  const toSave = () =>
    Packer.toBlob(doc).then(blob => {
      // saveAs from FileSaver will download the file
      saveAs(blob, 'example.docx');
    });

  return (
    <>
      <h1>HOME PAGE</h1>
      <Button onClick={toSave}>Ir a login</Button>
    </>
  );
};

export default Home;
