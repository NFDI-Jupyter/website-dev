export default function VideoSection() {
  return (
    <section
      id="videoSection"
      className="overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-36"
    >
      <div className="mx-auto">
        <video
          className="aspect-video w-full rounded-2xl object-cover shadow-2xl"
          controls
          preload="metadata"
          playsInline
          src=""
        ></video>
      </div>
    </section>
  );
}
