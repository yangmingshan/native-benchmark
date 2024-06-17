import { setReadyStart, getReadyTimeWithModal } from '../../proxy';

Page({
  onReady() {
    getReadyTimeWithModal();
  },
  reLaunch() {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/static/index',
    });
  },
  reLaunch2() {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/index/index',
    });
  },
});
