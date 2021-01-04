import { fetch } from '../../store/csrf';

const UploadPictureForm = () => {

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <input type='file' onChange={async (event) => {
        const rawInputElement = event.target;
        const theFileToUpload = rawInputElement.files[0];

        const formData = new FormData();
        formData.append('image', theFileToUpload);

      await fetch('/api/temp', {
        method: "POST",
        body: formData,
      });
      }}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadPictureForm;
