export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full py-16 px-8 border-t border-white/10"
      style={{ backgroundColor: '#0f0805' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-white/90 mb-4">
              Sriranga
            </h3>
            <p className="font-subtitle text-xs text-white/40 leading-relaxed">
              Premium organic spices since 1947.
              <br />
              Crafted with tradition. Made with love.
            </p>
          </div>

          <div>
            <h4 className="font-subtitle text-xs text-white/60 tracking-widest uppercase mb-4">
              Contact
            </h4>
            <p className="font-subtitle text-xs text-white/40 leading-relaxed">
              Sriranga Organics
              <br />
              Karnataka, India
              <br />
              hello@srirangaorganic.com
            </p>
          </div>

          <div>
            <h4 className="font-subtitle text-xs text-white/60 tracking-widest uppercase mb-4">
              Follow
            </h4>
            <div className="flex gap-4 font-subtitle text-xs text-white/40">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="font-subtitle text-xs text-white/20">
            &copy; {new Date().getFullYear()} Sriranga Organics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
