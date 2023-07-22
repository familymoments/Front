/**이미지 선택하는 컴포넌트 */

import { useState } from "react";
import styles from "./SelectImg.module.css";
import selectIcon from "../../assets/btn_select_photo.png";


const SelectImg=()=>{

    const [imgList,setImgList]=useState([]);
    
      let reader = new FileReader(); // FileReader API로 이미지 인식
      const handleUploadImg = e => {
        e.preventDefault();
        const file = e.target.files[0]; // file object는 e.target.files[0]에 있다.
    
        if (file) {
          reader.readAsDataURL(file); // 1. reader에게 file을 먼저 읽히고
          // 사진 올리고 나서 처리하는 event
          reader.onloadend = () => {
            setImgList(imgList.concat({ imagePreviewUrl: reader.result }));
            // dispatch(triggerImageCropModal()); // 사진 업로드 하면 crop창 띄움 -> reduct사용문장
            e.target.value = ''; 
          }; // 2. 비동기적으로 load가 끝나면 state에 저장
        }
      };
      return(
        <div className={styles.wrapper}>
            <label className={styles.filebox} htmlFor="ex_file">
                {imgList.map((map,idx)=>(
                    <img className={styles.imgSize} src={map.imagePreviewUrl}/>
                 ))}{/* 이미지 출력 */}

                
                <div className={styles.file}>
                    <img className={styles.selecticon} src={selectIcon}/>
                </div>
                
                
            </label>
            <input  type="file"
            id="ex_file"
            multiple={true}
            accept="image/jpg, image/png, image/jpeg"
            onChange={e=>{handleUploadImg(e);}}
            />
        </div>
      )
};

export default SelectImg;