import Capacitor

@objc(CapacitorDetectTouchStatusBarPlugin)
public class CapacitorDetectTouchStatusBarPlugin: CAPPlugin, UIScrollViewDelegate {
    override public func load() {
        guard let view = self.bridge?.viewController?.view else {
            return
        }

        guard let window = UIApplication.shared.windows.first else {
            return
        }

        let scrollView = UIScrollView()
        scrollView.frame = CGRect(origin: .zero, size: CGSize(width: window.bounds.width, height: 1))
        scrollView.layer.opacity = 0.1
        scrollView.contentSize.width = scrollView.frame.width
        scrollView.contentSize.height = 2
        scrollView.contentOffset.y = 1
        scrollView.delegate = self

        view.addSubview(scrollView)
    }

    public func scrollViewShouldScrollToTop(_ scrollView: UIScrollView) -> Bool {
        self.notifyListeners("touch", data: [:])
        return false
    }
}
