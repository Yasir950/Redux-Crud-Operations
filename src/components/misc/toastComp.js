import { toast } from "react-toastify";
export function openNotificationWithIcon(type, title, desc, redirectToLogin) {
  toast(desc, {
    type: type,
    toastId: "401",
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    closeButton: false,
    onClose: () => {
      if (redirectToLogin) {
        localStorage.clear();
        window.location.href = "/";
      }
    },
  });
}