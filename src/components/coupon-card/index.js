import { getTimeWithModal } from '../../proxy';

Component({
  properties: {
    info: Object,
  },
  data: {
    selected: false,
  },
  methods: {
    toggleSelect() {
      if (this.data.info.valid) {
        getTimeWithModal(this);
        this.setData({
          selected: !this.data.selected,
        });
      }
    },
  },
});
