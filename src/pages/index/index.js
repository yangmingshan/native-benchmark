import { buildData } from '../../data';
import {
  getTimeWithModal,
  setReadyStart,
  getReadyTimeWithModal,
} from '../../proxy';

Page({
  data: {
    listData: [],
    listData2: [],
    show2: false,
  },
  onReady() {
    getReadyTimeWithModal();
  },
  reLaunch() {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/index/index',
    });
  },
  reLaunch2() {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/static/index',
    });
  },
  toggleList() {
    getTimeWithModal(this);
    this.setData({
      show2: !this.data.show2,
    });
  },
  add2Lot() {
    getTimeWithModal(this);
    this.setData({
      listData2: this.data.listData2.concat(buildData(1000, true)),
    });
  },
  add2Lot2() {
    getTimeWithModal(this);
    this.setData({
      listData2: this.data.listData2.concat(buildData(5000, true)),
    });
  },
  add() {
    getTimeWithModal(this);
    this.setData({
      listData: this.data.listData.concat(buildData(100)),
    });
  },
  addLot() {
    getTimeWithModal(this);
    this.setData({
      listData: this.data.listData.concat(buildData(1000)),
    });
  },
  deleteOne() {
    getTimeWithModal(this);
    var listData = this.data.listData;
    listData.shift();
    this.setData({
      listData,
    });
  },
  deleteAll() {
    getTimeWithModal(this);
    this.setData({
      listData: [],
    });
  },
  update() {
    getTimeWithModal(this);
    var listData = this.data.listData;
    if (listData[0]) {
      listData[0].amount++;
      this.setData({
        listData,
      });
    }
  },
  updateAll() {
    getTimeWithModal(this);
    var listData = this.data.listData;
    listData.forEach((item) => {
      item.amount++;
    });
    this.setData({
      listData,
    });
  },
});
