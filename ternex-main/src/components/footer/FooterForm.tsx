import type { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const FooterForm: FC = () => {
	const formSchema = z.object({
		email: z.string().email({
			message: "Введите корректную почту.",
		}),
		phone: z
			.string()
			.refine(
				(value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value),
				{
					message: "Введите корректный номер телефона.",
				}
			),
		text: z.string().min(10, {
			message: "Минимальная длина сообщения - 10 символов.",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			phone: "",
			text: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const formData = new FormData();
		formData.append("email", values.email);
		formData.append("phone", values.phone);
		formData.append("text", values.text);
		fetch("https://ternex.ru/landing-form/", {
			method: "POST",
			body: formData,
		}).then((res) => {
			if (res.status === 200) {
				form.reset();
				alert("Сообщение успешно отправлено!");
			}
		});
	};

	return (
		<div className="px-8 py-6 border-2 border-primary/20 rounded-xl bg-primary/10 backdrop-blur-xl my-6">
			<h1 className="text-center text-2xl font-medium mb-4">Форма связи</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Email <sup>*</sup>
								</FormLabel>
								<FormControl>
									<Input placeholder="example@email.ru" {...field} />
								</FormControl>
								<FormDescription>
									Введите адрес электронной почты.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Телефон <sup>*</sup>
								</FormLabel>
								<FormControl>
									<Input placeholder="+7 (999) 999-99-99" {...field} />
								</FormControl>
								<FormDescription>
									Введите номер телефона для связи.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="text"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Сообщение <sup>*</sup>
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Начните писать сообщение..."
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="ml-auto block" type="submit">
						Отправить
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default FooterForm;
