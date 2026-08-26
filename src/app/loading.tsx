import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <div className="space-y-6">
          <div className="skeleton-shimmer h-3 w-28" />
          <div className="skeleton-shimmer h-12 w-3/4 max-w-xl" />
          <div className="skeleton-shimmer h-4 w-full max-w-lg" />
          <div className="mt-12 space-y-0 border-t border-warm-200">
            {[0, 1, 2].map((key) => (
              <div
                key={key}
                className="flex items-center gap-6 border-b border-warm-200 py-8"
              >
                <div className="skeleton-shimmer h-3 w-8" />
                <div className="skeleton-shimmer h-6 w-1/3" />
                <div className="skeleton-shimmer hidden h-4 flex-1 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
