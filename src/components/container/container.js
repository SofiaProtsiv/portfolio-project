import cl from "./container.module.scss";
export default function Container({ children }) {
  return (
    <div className={cl.container}>
      <div className={cl.content_wr}>{children}</div>
    </div>
  );
}
