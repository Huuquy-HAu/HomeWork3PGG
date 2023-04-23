import React, { SetStateAction, useEffect, useState, useRef } from 'react'
import CardChild from '../components/CardChild'
import { IArrayPhoto } from '../../../models/photo';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { selectPhotoDataList, setPhotoDataList, addPhotoData } from '../redux/cardReducer';
import CardSkeleton from '../components/CardSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {

}

const CardPage = (props: Props) => {
  const [ListData, setListData] = useState<Array<IArrayPhoto>>([])
  const [isEditButton, setisEditButton] = useState<boolean>(false);
  const [Loading, setLoading] = useState<boolean>(false);
  let [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const dispatch = useDispatch()
  const photoDataList = useSelector(selectPhotoDataList)


  const changeEdditButton: any = (value: boolean) => {
    if(value === true){
      return setisEditButton(true)
    }

    return setisEditButton(false)
  }


  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?&_start=0&_end=10")
    dispatch(setPhotoDataList(res.data))
    setLoading(true)
  }

  const resetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?&_start=0&_end=10")
    dispatch(setPhotoDataList([...res.data]))
    setisEditButton(false)
  }

  const getMoreData = async () => {
    setTimeout(async()=> {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?&_start=${page*10}&_end=${(page+1)*10}`)
      dispatch(addPhotoData(res.data))
      setPage(page+=1)
    },800)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >

        <div className='d-flex mb-3'>
          <button type="button" className="btn btn-success" disabled ={!isEditButton}>Confirm Update</button>
          <button type="button" className="btn btn-danger" disabled ={!isEditButton} onClick={() => resetData()}>Reset</button>
        </div>

        <InfiniteScroll
          dataLength={photoDataList.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<CardSkeleton/>}
        >

          {Loading ? photoDataList.map((value, index) => {
            return (
              <CardChild photoDataItem={value} photoDataIndex={index} changeEdditButton= {changeEdditButton} />
            )
          }) : <CardSkeleton/>}
        </InfiniteScroll>
        

      </div>
    </>
  )
}

export default CardPage