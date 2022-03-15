import { reactive, onMounted, onUnmounted } from "vue";

interface mousePosition {
  x: number;
  y: number;
}

export default function useMousePosition(element: Element = document.body) {
  const position = reactive<mousePosition>({ x: 0, y: 0 });
  const event = (e: any) => {
    position.x = e.clientX;
    position.y = e.clientY;
  };

  // onMounted(() => {
  element.addEventListener("mousemove", event);
  // });

  onUnmounted(() => {
    element.removeEventListener("mousemove", event);
  });
  return position;
}
