import { LazyImage, LazyVideo } from "../LazyImage/LazyMedia";
import "./stickerpad.css";

const stickerPAD = () => {
  return (
    <div id="stickerpad">
      <div className="container" id="stickerpad-body">
        <h1 className="text-center display-4" id="stickerpad-title">
          stickerPAD
        </h1>
        <div className="media-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP3.mp4?raw=true"
            hash="L68zfREe04#R~9R+9dxZET-BxoOW"
            alt="stickerpad"
          />
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP2.png?raw=true"
            hash="LJEMFA.900H=~fxsD;RQ02M|?ZtP"
            alt="stickerpad"
          />
        </div>
        <div className="jumbotron" id="stickerpad-jumbotron">
          <p className="stickerpad-text">
            This sketch pad program was created for a class project. It is
            essentially a static web application with a canvas that users can
            draw on and import emojis to use as stickers. I developed this using
            Typescript +{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Vite
            </a>{" "}
            and integrated two fundamental programming patterns: the Observer
            Pattern and the Command Pattern. These patterns not only facilitated
            the efficient management of the application&apos;s components but
            also enabled essential functionalities such as dynamic updates,
            accurate user feedback, and an undo/redo system.
          </p>
          <p className="stickerpad-text">
            The{" "}
            <a
              href="https://refactoring.guru/design-patterns/observer"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Observer Pattern
            </a>{" "}
            played a pivotal role in maintaining communication between different
            parts of the application, particularly the canvas and the user
            interface components. By implementing{" "}
            <a
              href="https://github.com/aguizaro/stickerPAD/blob/main/src/main.ts#L181C1-L201C2"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              custom events
            </a>{" "}
            such as &quot;tool-moved&quot; and &quot;drawing-changed,&quot; I
            established a mechanism for notifying changes and triggering updates
            across the program. For instance, whenever a drawing tool or the
            canvas state changed, observers were notified, ensuring that the
            user interface elements and the canvas were always in sync. This
            pattern enhanced modularity and allowed for seamless integration of
            new features without creating too many dependencies between
            components.
          </p>
          <p className="stickerpad-text">
            The{" "}
            <a
              href="https://refactoring.guru/design-patterns/command"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Command Pattern
            </a>{" "}
            played a pivotal role in ensuring smooth and continuous lines on the
            canvas, providing accurate tool previews, and implementing seamless
            undo and redo functionalities. Commands, such as drawing a line or
            placing a sticker, were encapsulated within specific command objects
            of type{" "}
            <a
              href="https://github.com/aguizaro/stickerPAD/blob/main/src/main.ts#L89C1-L117C2"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              LineCommand
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/aguizaro/stickerPAD/blob/main/src/main.ts#L143C1-L179C2"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              StickerCommand
            </a>
            , each containing the logic necessary for accurate display and
            extension of lines. Additionally, commands for cursor movement were
            encapsulated into objects of type{" "}
            <a
              href="https://github.com/aguizaro/stickerPAD/blob/main/src/main.ts#L118C1-L142C2"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              CursorCommand
            </a>
            , offering players precise feedback for their selected tool. These
            abstractions also simplified the implementation of undo/redo
            operations by organizing commands into a stack, enabling efficient
            manipulation of canvas elements. Furthermore, by decoupling the user
            interface from the canvas, the Command Pattern enhanced the
            application&apos;s flexibility and maintainability.
          </p>
          <p className="stickerpad-text">
            By leveraging these programming patterns, I was able to create a
            reactive sketch pad program and establish a solid foundation for
            future modifications and maintenance of this application.
          </p>
          <p className="stickerpad-text">
            Feel free to check out the{" "}
            <a
              href="https://aguizaro.github.io/stickerPAD/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              live demo
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default stickerPAD;
