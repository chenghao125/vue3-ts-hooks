import { reactive } from "vue";
interface userStatus {
  status: number;
}

class useUserStatus {
  public status: userStatus = reactive<userStatus>({ status: 1 });
  // public status: userStatus = { userid: 1 };
  public setUserStatus = (_status: number) => {
    this.status.status = _status;
  };
}

export default new useUserStatus();
