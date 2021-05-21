import { readdirSync } from "fs";
import { GetStaticProps } from "next";
import Header from "next/head";
import * as ThreeJS from "three";
import { WebGLRendererParameters } from "three";
import { useEffect } from "react";

export default function Home({ blogs }) {
  useEffect(() => {
    const scene = new ThreeJS.Scene();
    const camera = new ThreeJS.PerspectiveCamera(
      75,
      window?.innerWidth / window?.innerHeight,
      0.1,
      1000
    );

    const renderer = new ThreeJS.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    } as WebGLRendererParameters);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);
    renderer.render(scene, camera);

    const geometry = new ThreeJS.TorusGeometry(10, 3, 16, 100);
    const material = new ThreeJS.MeshStandardMaterial({
      color: 0xff3647,
    });

    const torus = new ThreeJS.Mesh(geometry, material);
    scene.add(torus);

    const pointLight = new ThreeJS.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new ThreeJS.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    function star() {
      const geometry = new ThreeJS.SphereGeometry(0.25, 24, 24);
      const material = new ThreeJS.MeshStandardMaterial({ color: 0xffffff });
      const star = new ThreeJS.Mesh(geometry, material);

      const [x, y, z] = new Array(3)
        .fill(3)
        .map(() => ThreeJS.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill(200).forEach(star);

    const spaceTexture = new ThreeJS.TextureLoader().load("space.jpg");
    scene.background = spaceTexture;

    const romeahTexture = new ThreeJS.TextureLoader().load("romeah.jpg");
    const romeah = new ThreeJS.Mesh(
      new ThreeJS.BoxGeometry(3, 3, 3),
      new ThreeJS.MeshBasicMaterial({ map: romeahTexture })
    );
    scene.add(romeah);

    romeah.position.z = -5;
    romeah.position.x = 2;

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      romeah.rotation.y += 0.01;
      romeah.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  });

  return (
    <div className="App">
      <Header>
        <title>Ronit "RoMeAh" Rahaman</title>
      </Header>
      <canvas id="bg"></canvas>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  let blogs = readdirSync("blogs").map((a) => a.replace(".md", ""));

  return {
    props: {
      blogs,
    },
  };
};
