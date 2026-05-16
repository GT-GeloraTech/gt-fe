import { contactDetails } from "./data";

export function ContactInfo() {
  return (
    <div className="glass-card border-primary/10 rounded-[32px] border p-8">
      <h2 className="mb-10 text-3xl font-semibold">Contact Details</h2>

      <div className="space-y-8">
        {contactDetails.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-4">
              <Icon className="text-primary mt-1" />

              <div>
                <p className="mb-2 font-medium">{item.title}</p>

                {item.text.map((line) => (
                  <p key={line} className="text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
