const Shapes = ({ shapes, shapesClass = "simple_shapes" }) => {
  return (
    <div className={shapesClass}>
      {shapes.map((shap) => (
        <span
          key={shap.id}
          className={`${shap.classname} ${shap.animationName}`}
        >
          <img
            className="svg"
            src={`/img/svg/shapes/${shap.shapeImg}.svg`}
            alt="svg-icon"
          />
        </span>
      ))}
    </div>
  );
};
export default Shapes;
